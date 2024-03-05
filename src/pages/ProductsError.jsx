import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation";
import { useRouteError } from "react-router-dom";

export default function ProductsErrorPage() {
    const error = useRouteError();

    let title = "An error occured!";
    let message = "Something went wrong!";

    if (error.status === 401) {
        message = "Access denied. You are not authorised";
    };

    if (error.status === 404) {
        title = "Not found!";
        message = "Could not find resource or page.";
    };
    

    return (
        <>
            <PageContent title={title}>
                <p>{message}</p>
            </PageContent>
        </>
    );
}