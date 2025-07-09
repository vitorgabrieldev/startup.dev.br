import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders the main heading', () => {
    render(<App />)
    expect(screen.getByText(/Revolucionando/i)).toBeInTheDocument()
  })

  it('renders the navigation menu', () => {
    render(<App />)
    expect(screen.getByText('Recursos')).toBeInTheDocument()
    expect(screen.getByText('Desafios')).toBeInTheDocument()
    expect(screen.getByText('Valores')).toBeInTheDocument()
    expect(screen.getByText('Participe')).toBeInTheDocument()
  })

  it('renders the CTA buttons', () => {
    render(<App />)
    expect(screen.getByText('Junte-se à Lista de Espera')).toBeInTheDocument()
    expect(screen.getByText('Saiba Mais')).toBeInTheDocument()
  })

  it('renders the features section', () => {
    render(<App />)
    expect(screen.getByText('Inteligência Artificial')).toBeInTheDocument()
    expect(screen.getByText('Conteúdo Focado')).toBeInTheDocument()
    expect(screen.getByText('Curadoria de Qualidade')).toBeInTheDocument()
  })

  it('renders the footer', () => {
    render(<App />)
    expect(screen.getAllByText(/startup.dev.br/i)[0]).toBeInTheDocument()
    expect(screen.getByText(/Todos os direitos reservados/i)).toBeInTheDocument()
  })

  it('has proper accessibility attributes', () => {
    render(<App />)
    const menuButton = screen.getByRole('button', { name: /menu/i })
    expect(menuButton).toHaveAttribute('aria-label')
  })
})

