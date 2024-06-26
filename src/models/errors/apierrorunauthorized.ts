/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Unauthorized error
 */
export type ApiErrorUnauthorizedData = {
    status: number;
    error: string;
};

/**
 * Unauthorized error
 */
export class ApiErrorUnauthorized extends Error {
    status: number;
    error: string;

    /** The original data that was passed to this error instance. */
    data$: ApiErrorUnauthorizedData;

    constructor(err: ApiErrorUnauthorizedData) {
        super("");
        this.data$ = err;

        this.status = err.status;
        this.error = err.error;

        this.message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : "API error occurred";

        this.name = "ApiErrorUnauthorized";
    }
}

/** @internal */
export namespace ApiErrorUnauthorized$ {
    export const inboundSchema: z.ZodType<ApiErrorUnauthorized, z.ZodTypeDef, unknown> = z
        .object({
            status: z.number().int(),
            error: z.string(),
        })
        .transform((v) => {
            return new ApiErrorUnauthorized(v);
        });

    export type Outbound = {
        status: number;
        error: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ApiErrorUnauthorized> = z
        .instanceof(ApiErrorUnauthorized)
        .transform((v) => v.data$)
        .pipe(
            z.object({
                status: z.number().int(),
                error: z.string(),
            })
        );
}
