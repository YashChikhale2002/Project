'use client';
import { AuthUser } from '@supabase/supabase-js';
import React, { useState } from 'react';

import { Subscription, workspace } from '@/lib/supabase/supabase.types';

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from '../ui/card';
import { FieldValues, useForm } from 'react-hook-form';
import EmojiPicker from '../global/emoji-picker';
import { Input } from '../ui/input';
import { Label } from '@radix-ui/react-label';


  interface DashboardSetupProps {
    user: AuthUser;
    subscription: Subscription | null;
  }

  const DashboardSetup: React.FC<DashboardSetupProps> = ({
    subscription,
    user,
  }) => {

    const [selectedEmoji, setSelectedEmoji] = useState('💼');

    const { register,
        handleSubmit,
        reset,
        formState: { isSubmitting: isLoading, errors },} = useForm<FieldValues>({
        mode: 'onChange',
        defaultValues: {
          logo: '',
          workspaceName: '',
        },
      });

    
  return (
       <Card
      className="w-[800px]
      h-screen
      sm:h-auto
  "
    >

<CardHeader>
<CardTitle>Create A Workspace</CardTitle>
<CardDescription>
Lets create a private workspace to get you started. You can add
collaborators later from the workspace settings tab.
</CardDescription>
</CardHeader>
<CardContent>
<form onSubmit={()=>{}}>
<div className="flex flex-col gap-4">

<div className="text-5xl">
                <EmojiPicker getValue={(emoji) => setSelectedEmoji(emoji)}>
                  {selectedEmoji}
                </EmojiPicker>
              </div>

              <div className="w-full ">
                <Label
                  htmlFor="logo"
                  className="text-sm
                  text-muted-foreground
                "
                >
                  Workspace Logo
                </Label>
                <Input
                  id="logo"
                  type="file"
                  accept='image/*'
                  placeholder="Workspace Name"
                  disabled={isLoading || subscription?.status !=="active"}
                  {...register('logo', {
                    required: 'Workspace name is required',
                  })}
                />
                <small className="text-red-600">
                  {errors?.workspaceName?.message?.toString()}
                </small>
              </div>
</div>
</form>
</ CardContent>

        </Card>
  )
}

export default DashboardSetup