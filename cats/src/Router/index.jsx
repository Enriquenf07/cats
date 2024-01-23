import Character from "../pages/Character";
import City from "../pages/City";
import Home from "../pages/Home";
import Settings from "../pages/Settings";

const page = {
    0: <Home />,
    1: <Character />,
    2: <City/>,
    3: <Settings />,
}

export default function Router({ index }) {
    return (
        <>
            {page[index]}
        </>
    )
}