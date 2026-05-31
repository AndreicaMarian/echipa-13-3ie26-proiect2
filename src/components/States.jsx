export function Loading({ text = 'Se încarcă...' }) {
  return (
    <div className="flex flex-col items-center justify-center py-32">
      <div className="w-12 h-12 border-4 border-wheat border-t-warm rounded-full animate-spin mb-4" />
      <p className="font-body text-brown/60 dark:text-cream/50">{text}</p>
    </div>
  )
}

export function ErrorState({ onRetry }) {
  return (
    <div className="text-center py-32">
      <div className="text-5xl mb-4">⚠️</div>
      <h3 className="font-heading text-xl text-brown dark:text-cream mb-2">
        Nu am putut încărca datele.
      </h3>
      <p className="font-body text-brown/60 dark:text-cream/50 mb-6">
        Verifică dacă serverul Strapi rulează.
      </p>
      {onRetry && <button onClick={onRetry} className="btn-primary">Reîncearcă</button>}
    </div>
  )
}
