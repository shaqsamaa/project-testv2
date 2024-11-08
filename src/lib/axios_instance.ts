import axios from "axios";
import { API_ROUTE } from "@/lib/env.ts";

export const insrance = axios.create({
    baseURL: API_ROUTE,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    withXSRFToken: true,
    withCredentials: true,
});