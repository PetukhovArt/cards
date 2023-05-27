import { useRouteError } from "react-router-dom";
import s from "./ErrorPage.module.css";

export default function ErrorPage() {
  const error: any = useRouteError();

  return (
    <div className={s.errorPage}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
