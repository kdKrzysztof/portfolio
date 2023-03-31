import { LinkClasses } from "@mui/material/Link";
import type { StaticImageData } from "next/image";
import type { Dispatch, SetStateAction } from "react";

export interface ContactOption {
    ImageIcon: JSX.Element;
    ContactName: string;
    ContactData: string;
}

export interface languageType {
    setLang: Dispatch<SetStateAction<string>>;
}

export interface ProjectProps {
    ImageURL: StaticImageData;
    ProjectName: string;
    ProjectDesc: string;
    LivePreviewLink: string;
    children: JSX.Element;
}

export interface SkillInterface {
    ImageURL: string | StaticImageData;
    SkillName: string;
}

export interface ProjectObjInterface {
    imageURL: StaticImageData;
    projectName: string;
    projectDesc: string;
    LivePreviewLink: string;
    techStack: string[];
}

export interface skillsObjInterface {
    imageURL: string | StaticImageData;
    skillName: string;
}