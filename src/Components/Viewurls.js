import React, {useEffect, useState} from 'react';
import Nav from './Nav';
import { isAuthenticated, urlPost, getUrls } from '../API_CALLS/apiHandler.js';
import { Navigate, useNavigate } from 'react-router-dom';
import Updateurl from './Updateurl';
function Viewurls() {
    const [urls, setUrls] = useState([])
    const [error, setError] = useState(false)
    const { user, token } = isAuthenticated();

    let histroy = useNavigate()

    const loadAllUrls = () => {
        getUrls(user._id, token).then(data => {
            if (data.error) {
                setError(true);
            } else {
                setUrls(data);
                console.log(data);
            }
        })
    }

    useEffect(() => {
        loadAllUrls();
    }, [])

    return (
        <div className="viewurls">
            <Nav />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            {urls.length !== 0 ? <div >
                    {

                        urls.map((url, index) => {
                            return (
                                <>
                                    <div key={url._id}>
                                    <span>Long URL : {url.longUrl}</span><br></br>
                                    <span>Short URL : {url.shortUrl}</span><br></br>
                                    <span>Click Counts : {url.clickCount}</span><br></br>
                                    <button onClick={() => <Navigate to="/update-url" replace={true} />}>Update</button>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    </div>
                                </>
                            )
                        })

                    }
                </div> : <>No post Exist</>}
        </div>
    );
}

export default Viewurls;