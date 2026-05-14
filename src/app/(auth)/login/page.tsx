import LoginForm from './LoginForm'

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>
}) {
  const { next = '' } = await searchParams
  const isCheckout = next.startsWith('/checkout/')
  return <LoginForm next={next} isCheckout={isCheckout} />
}
