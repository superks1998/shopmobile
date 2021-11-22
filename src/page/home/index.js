import { useEffect } from "react";
import { useDispatch } from "react-redux";
import LayoutComponent from "../../components/Layout";
import { getDataProducts } from "./actions";
import FeaturedProducts from "./components/Featured";
import LatestProducts from "./components/Latest";
import TopSelling from "./components/TopSelling";

function HomePage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDataProducts());
    }, [dispatch]);

    return (
        <>
            <LayoutComponent>
                <FeaturedProducts />
                <LatestProducts />
                <TopSelling />
            </LayoutComponent>
        </>
    );
}

export default HomePage;
