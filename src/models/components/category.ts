/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type Category = {
    id?: number | undefined;
    name?: string | undefined;
};

/** @internal */
export namespace Category$ {
    export const inboundSchema: z.ZodType<Category, z.ZodTypeDef, unknown> = z.object({
        id: z.number().int().optional(),
        name: z.string().optional(),
    });

    export type Outbound = {
        id?: number | undefined;
        name?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Category> = z.object({
        id: z.number().int().optional(),
        name: z.string().optional(),
    });
}
