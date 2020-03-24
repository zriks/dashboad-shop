import { ajax } from "rxjs/observable/dom/ajax";

import { productConstant } from "../constants";
import { productAction } from "../actions";
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/catch";

const apiUrl = process.env.REACT_APP_API_URL;

export const fetchProductEpic = action$ =>
    action$.ofType(productConstant.GETALL_REQUEST).switchMap(() => {
        return ajax
            .get(`${apiUrl}product`)
            .map(ajaxRes => ajaxRes.response)
            .map(response => productAction.fetchProductSuccess(response))
            .catch(e => productAction.fetchProductFailure(e));
    });
