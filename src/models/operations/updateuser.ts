/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type UpdateUserRequest = {
    /**
     * name that needs to be updated
     */
    username: string;
    /**
     * Update an existent user in the store
     */
    user?: components.User | undefined;
};

/** @internal */
export namespace UpdateUserRequest$ {
    export const inboundSchema: z.ZodType<UpdateUserRequest, z.ZodTypeDef, unknown> = z
        .object({
            username: z.string(),
            User: components.User$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                User: "user",
            });
        });

    export type Outbound = {
        username: string;
        User?: components.User$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateUserRequest> = z
        .object({
            username: z.string(),
            user: components.User$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                user: "User",
            });
        });
}