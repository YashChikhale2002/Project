'use server';
import db from './db';
import { File, Folder, Subscription, User, workspace } from './supabase.types';


export const getUserSubscriptionStatus = async (userId: string) => {
    try {
      const data = await db.query.subscriptions.findFirst({
        where: (s, { eq }) => eq(s.userId, userId),
      });
      if (data) return { data: data as Subscription, error: null };
      else return { data: null, error: null };
    } catch (error) {
      console.log(error);
      return { data: null, error: `Error` };
    }
  };
  