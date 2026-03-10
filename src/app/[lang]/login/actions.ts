'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
  const supabase = await createClient()
  const lang = formData.get('lang') as string || 'en'
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect(`/${lang}/login?error=${encodeURIComponent(error.message)}`)
  }

  revalidatePath(`/${lang}`, 'layout')
  redirect(`/${lang}/dashboard`)
}

export async function signup(formData: FormData) {
  const supabase = await createClient()
  const lang = formData.get('lang') as string || 'en'
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    redirect(`/${lang}/login?error=${encodeURIComponent(error.message)}`)
  }

  revalidatePath(`/${lang}`, 'layout')
  redirect(`/${lang}/dashboard`)
}

export async function logout(formData: FormData) {
  const supabase = await createClient()
  const lang = formData.get('lang') as string || 'en'
  await supabase.auth.signOut()
  redirect(`/${lang}/login`)
}
