import React, { useState } from "react"
import Logout from "./authentication/Logout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCog, faUserCircle } from "@fortawesome/free-solid-svg-icons"

export default function NavbarDashboard() {
    const [click, setClick] = useState(false)

    function handleClick() {
        setClick(!click)
    }

    return (
        <nav className="navbar-dashboard flex flex-jc-sb flex-ai-c">
            <div className="logo">stargram</div>
            <div>
                <FontAwesomeIcon
                    icon={faUserCircle}
                    className="icon-main fa-2x"
                    onClick={handleClick}
                />
                <div className={click ? "menu" : "menu hidden"}>
                    <div></div>
                    <ul>
                        <li className="flex flex-ai-c">
                            <a href="/dashboard">
                                <FontAwesomeIcon
                                    icon={faUserCircle}
                                    className="icon"
                                />
                                Profile
                            </a>
                        </li>
                        <li className="flex flex-ai-c">
                            <a href="/dashboard">
                                <FontAwesomeIcon
                                    icon={faCog}
                                    className="icon"
                                />
                                Settings
                            </a>
                        </li>
                    </ul>

                    <Logout />
                </div>
            </div>
        </nav>
    )
}
