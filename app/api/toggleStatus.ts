"use server";

import prisma from "../../lib/prisma";

export type ToggleRequest = {
    questionURL: string;
    isComplete: boolean;
};

export async function toggleAloExpertStatus(options: ToggleRequest) {
    const response = await prisma.algoExpertProblems.update({
        where: {
            questionURL: options.questionURL,
        },
        data: {
            isComplete: !options.isComplete,
        },
    });
    return response;
}

export async function toggleLeetcodeStatus(options: ToggleRequest) {
    const response = await prisma.leetcodeProblems.update({
        where: {
            questionURL: options.questionURL,
        },
        data: {
            isComplete: !options.isComplete,
        },
    });
    return response;
}
