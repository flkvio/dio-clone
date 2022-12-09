import React from "react";
import { string } from "yup";

export interface IUserInfo {
    name: string;
    image?: string, 
    percentual: number;
}

export interface IUserInfoStyle {
    percentual: number;
}