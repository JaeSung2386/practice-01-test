import axios from 'axios';

export function getList(search) {
    return({
        url: 'http://localhost:8080/list' + search,
    });
}