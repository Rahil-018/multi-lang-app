import { Link } from "react-router-dom";
const Languageoption = (props) => {
    return (
        <>
            {/* NavigationBar */}
            <ul className="nav justify-content-center " >
                <li className="nav-item" >
                    <Link className="nav-link active" aria-current="page" to="/" style={{ color: 'black' }} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
                        <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
                    </svg></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/aboutus" style={{ color: 'black' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-file-person" viewBox="0 0 16 16">
                        <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
                        <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contactus" style={{ color: 'black' }} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-lines-fill" viewBox="0 0 16 16">
                        <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
                    </svg></Link>
                </li>
                {/* <div >
                    <select  onChange={props.onChange}>
                        <option>Select Language</option>
                        <option value={'en'}>English</option>
                        <option value={'chi'}>Chinese</option>
                        <option value={'hi'}>Hindi</option>
                    </select>
                </div> */}
            </ul>
        </>
    )
}
export default Languageoption;