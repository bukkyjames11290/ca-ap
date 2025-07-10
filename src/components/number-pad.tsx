import { Delete } from 'lucide-react'

interface NumberPadProps {
  onNumberClick: (num: string) => void
  onDecimalClick: () => void
  onBackspace: () => void
  textColor?: string
}

export function NumberPad({ onNumberClick, onDecimalClick, onBackspace, textColor = "text-white" }: NumberPadProps) {
  return (
    <div className="grid grid-cols-3 gap-8 px-8">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
        <button
          key={num}
          onClick={() => onNumberClick(num.toString())}
          className={`${textColor} text-3xl font-light h-16 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors`}
        >
          {num}
        </button>
      ))}
      <button
        onClick={onDecimalClick}
        className={`${textColor} text-3xl font-light h-16 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors`}
      >
        •
      </button>
      <button
        onClick={() => onNumberClick("0")}
        className={`${textColor} text-3xl font-light h-16 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors`}
      >
        0
      </button>
      <button
        onClick={onBackspace}
        className={`${textColor} text-2xl h-16 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors`}
      >
        <Delete className="w-6 h-6" />
      </button>
    </div>
  )
}
