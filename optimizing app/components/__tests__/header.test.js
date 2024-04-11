import { render } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import store from "../../utils/store"
import { Router } from "react-router"
import {StaticRouter} from "react-router-dom/server"
test("logo should load in rendering header" , ()=>{
    //load header

    const header = render(
        <StaticRouter>
            <Provider 
        store={store}>
            <Header/>
            </Provider>
        </StaticRouter>
            )

    console.log(header );

    const logo = header.getByTestId("logo")
    console.log(logo);
    expect(logo.src).toBe("https://vectorlogoseek.com/wp-content/uploads/2018/07/foodcourt-vector-logo.png")
    //check if logo is oaded
})