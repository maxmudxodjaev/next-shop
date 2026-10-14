'use client'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="error-page">
      <header className="error-header">
        <Link href="/" className="shop-logo">
          LUXE<span>.</span>
        </Link>

        <span className="error-status">
          <span className="error-status-dot"></span>
          PAGE NOT FOUND
        </span>
      </header>

      <section className="error-content">
        <div className="error-visual">
          <div className="error-circle"></div>

          <div className="error-number">
            4<span>0</span>4
          </div>

          <div className="error-floating error-floating-one">
            ✳
          </div>

          <div className="error-floating error-floating-two">
            +
          </div>

          <div className="error-small-label">
            ERROR CODE / 404
          </div>
        </div>

        <div className="error-text">
          <span className="error-eyebrow">
            ОШИБКА НАВИГАЦИИ
          </span>

          <h1>
            Кажется,
            <br />
            ты <span>заблудился.</span>
          </h1>

          <p>
            Страница, которую ты ищешь, не существует
            или была перемещена. Давай вернёмся
            к тому, что действительно важно.
          </p>

          <div className="error-actions">
            <Link href="/" className="error-home-button">
              <span>←</span>
              На главную
            </Link>

            <button
              className="error-back-button"
              onClick={() => window.history.back()}
            >
              Вернуться назад
            </button>
          </div>
        </div>
      </section>

      <footer className="error-footer">
        <Link href="/" className="error-footer-logo">
          LUXE<span>.</span>
        </Link>

        <p>Хороший вкус начинается с деталей.</p>

        <span className="error-footer-copy">
          © 2026 LUXE
        </span>
      </footer>
    </main>
  )
}
