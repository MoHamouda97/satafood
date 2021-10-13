import { HttpHeaders } from "@angular/common/http";

const headers = new HttpHeaders({
    'Authorization': 'Bearer ' + "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjIyMiwiZXhwIjoxNjMyNzczNDY0fQ.c9NvXz5iN6UbTdMz2zvFrroffkQYHUdUSvCXjLZl4pc",
    "enctype" : "application/json"
});

export const options = {headers: headers};