'use server';

import {sql} from './db';
import { revalidatePath } from 'next/cache';

export async function deleteProperty(id: number) {
    try {
        await sql`DELETE FROM properties WHERE id = ${id}`;

        revalidatePath('/admin');
        revalidatePath('/');

        return {success: true};
    } catch (error) {
        console.error('Delete Error:', error);
        return {success: false}
    }
}