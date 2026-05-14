'use client'

import { useActionState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { forgotPassword } from '../actions'

type State = { error?: string; success?: boolean } | null

const inputClass =
  'w-full px-3 py-2 text-sm border border-stone-300 rounded-lg bg-white placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-transparent transition'

export default function ForgotPasswordPage() {
  const [state, formAction, pending] = useActionState<State, FormData>(forgotPassword, null)

  return (
    <div className="w-full max-w-sm">
      <div className="text-center mb-8">
        <div className="text-5xl mb-3">📚</div>
        <h1 className="text-2xl font-bold text-stone-900 tracking-tight">Achachaw Books</h1>
        <p className="text-stone-500 text-sm mt-1">Libros independientes del Perú</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-8">
        <h2 className="text-lg font-semibold text-stone-800 mb-2">Recuperar contraseña</h2>
        <p className="text-sm text-stone-500 mb-5">
          Ingresa tu correo y te enviaremos un enlace para restablecer tu contraseña.
        </p>

        {state?.success ? (
          <div className="px-4 py-4 bg-green-50 border border-green-100 rounded-xl text-center">
            <p className="text-sm text-green-700 font-medium">¡Revisa tu correo!</p>
            <p className="text-xs text-green-600 mt-1">
              Te enviamos un enlace para restablecer tu contraseña.
            </p>
          </div>
        ) : (
          <form action={formAction} className="space-y-4">
            <div className="space-y-1.5">
              <label htmlFor="email" className="block text-sm font-medium text-stone-700">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="tu@email.com"
                className={inputClass}
              />
            </div>
            {state?.error && (
              <div className="px-3 py-2 bg-red-50 border border-red-100 rounded-lg">
                <p className="text-sm text-red-600">{state.error}</p>
              </div>
            )}
            <Button type="submit" disabled={pending} className="w-full cursor-pointer">
              {pending ? 'Enviando...' : 'Enviar enlace'}
            </Button>
          </form>
        )}

        <p className="text-center text-sm text-stone-500 mt-5">
          <Link href="/login" className="font-medium text-stone-800 hover:underline">
            Volver al inicio de sesión
          </Link>
        </p>
      </div>
    </div>
  )
}
