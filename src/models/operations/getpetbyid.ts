/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetPetByIdRequest = {
    /**
     * ID of pet to return
     */
    petId: number;
};

/** @internal */
export namespace GetPetByIdRequest$ {
    export const inboundSchema: z.ZodType<GetPetByIdRequest, z.ZodTypeDef, unknown> = z.object({
        petId: z.number().int(),
    });

    export type Outbound = {
        petId: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetPetByIdRequest> = z.object({
        petId: z.number().int(),
    });
}
