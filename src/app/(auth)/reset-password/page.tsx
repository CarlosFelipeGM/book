'use client'

import { useActionState } from 'react'
import { Button } from '@/components/ui/button'
import { resetPassword } from '../actions'

type State = { error?: string; success?: boolean } | null

const inputClass =
  'w-full px-3 py-2 text-sm border border-stone-300 rounded-lg bg-white placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-transparent transition'

export default function ResetPasswordPage() {
  const [state, formAction, pending] = useActionState<State, FormData>(resetPassword, null)

  return (
    <div className="w-full max-w-sm">
      <div className="text-center mb-8">
        <div className="text-5xl mb-3">📚</div>
        <h1 className="text-2xl font-bold text-stone-900 tracking-tight">Achachaw Books</h1>
        <p className="text-stone-500 text-sm mt-1">Libros independientes del Perú</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-8">
        <h2 className="text-lg font-semibold text-stone-800 mb-2">Nueva contraseña</h2>
        <p className="text-sm text-stone-500 mb-5">
          Elige una nueva contraseña para tu cuenta.
        </p>

        <form action={formAction} className="space-y-4">
          <div className="space-y-1.5">
            <label htmlFor="password" className="block text-sm font-medium text-stone-700">Nueva contraseña</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              minLength={6}
              autoComplete="new-password"
              placeholder="••••••••"
              className={inputClass}
            />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="confirm" className="block text-sm font-medium text-stone-700">Confirmar contraseña</label>
            <input
              id="confirm"
              name="confirm"
              type="password"
              required
              minLength={6}
              autoComplete="new-password"
              placeholder="••••••••"
              className={inputClass}
            />
          </div>
          {state?.error && (
            <div className="px-3 py-2 bg-red-50 border border-red-100 rounded-lg">
              <p className="text-sm text-red-600">{state.error}</p>
            </div>
          )}
          <Button type="submit" disabled={pending} className="w-full cursor-pointer">
            {pending ? 'Guardando...' : 'Guardar contraseña'}
          </Button>
        </form>
      </div>
    </div>
  )
}
