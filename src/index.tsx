import ReactDOM from "react-dom";
import Root from "./Root";
import store from "./store/store";
import { Provider } from "react-redux";
import { Web3ContextProvider } from "./hooks";
import { SnackbarProvider } from "notistack";
import SnackMessage from "./components/Messages/snackbar";
// import * as Sentry from "@sentry/react";
// import { Integrations } from "@sentry/tracing";

// Sentry.init({
//     dsn: "https://3594e14f952a4db69512c89c000b1779@o224096.ingest.sentry.io/6094560",
//     integrations: [new Integrations.BrowserTracing()],
  
//     // Set tracesSampleRate to 1.0 to capture 100%
//     // of transactions for performance monitoring.
//     // We recommend adjusting this value in production
//     tracesSampleRate: 1.0,
//   });
//   window.onerror=(e)=>{
//       console.log(e);
//   }

ReactDOM.render(
    <SnackbarProvider
        maxSnack={4}
        anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
        }}
        content={(key, message: string) => <SnackMessage id={key} message={JSON.parse(message)} />}
        autoHideDuration={10000}
    >
        <Provider store={store}>
            
            <Web3ContextProvider>
                <Root />
            </Web3ContextProvider>
            
        </Provider>
    </SnackbarProvider>,
    document.getElementById("root"),
);
