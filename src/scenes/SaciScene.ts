export class SaciScene extends Phaser.Scene {
    private items: Phaser.GameObjects.Text[] = []
    private correctOrder: string[] = ['mapa', 'bussola', 'lanterna', 'cantil', 'faca', 'isqueiro']
    private currentOrder: string[] = []
    private timer: number = 45
    private timerText!: Phaser.GameObjects.Text
    private dragging: Phaser.GameObjects.Text | null = null
    private dragOffsetX: number = 0
    private dragOffsetY: number = 0
  
    constructor() {
      super({ key: 'SaciScene' })
    }
  
    create() {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
  
      // Fundo
      this.add.rectangle(cx, cy, window.innerWidth, window.innerHeight, 0x1a2e1a)
  
      // Título
      this.add.text(cx, 60, '🌀 O Saci embaralhou seu inventário!', {
        fontSize: '24px',
        color: '#a8d5a2'
      }).setOrigin(0.5)
  
      this.add.text(cx, 100, 'Reordene os itens na sequência correta', {
        fontSize: '16px',
        color: '#6b9e65'
      }).setOrigin(0.5)
  
      // Timer
      this.timerText = this.add.text(cx, 140, 'Tempo: 45s', {
        fontSize: '20px',
        color: '#ffffff'
      }).setOrigin(0.5)
  
      // Embaralha os itens
      this.currentOrder = [...this.correctOrder].sort(() => Math.random() - 0.5)
  
      // Cria os itens arrastáveis
      this.currentOrder.forEach((item, index) => {
        const x = cx - 250 + index * 100
        const y = cy
  
        const box = this.add.text(x, y, item, {
          fontSize: '18px',
          color: '#ffffff',
          backgroundColor: '#2d4a2d',
          padding: { x: 10, y: 8 }
        }).setOrigin(0.5).setInteractive()
  
        this.input.setDraggable(box)
        this.items.push(box)
      })
  
      // Drag events
      this.input.on('dragstart', (pointer: any, obj: Phaser.GameObjects.Text) => {
        this.dragging = obj
        obj.setColor('#a8d5a2')
      })
  
      this.input.on('drag', (pointer: any, obj: Phaser.GameObjects.Text) => {
        obj.x = pointer.x
        obj.y = pointer.y
      })
  
      this.input.on('dragend', (pointer: any, obj: Phaser.GameObjects.Text) => {
        obj.setColor('#ffffff')
        this.checkOrder()
      })
  
      // Timer countdown
      this.time.addEvent({
        delay: 1000,
        repeat: 44,
        callback: () => {
          this.timer--
          this.timerText.setText(`Tempo: ${this.timer}s`)
          if (this.timer <= 0) {
            this.scene.start('MenuScene')
          }
        }
      })
    }
  
    checkOrder() {
      const currentPositions = [...this.items].sort((a, b) => a.x - b.x).map(i => i.text)
      const acertou = currentPositions.every((item, i) => item === this.correctOrder[i])
      if (acertou) {
        this.add.text(window.innerWidth / 2, window.innerHeight - 100, '✅ Você venceu o Saci!', {
          fontSize: '28px',
          color: '#a8d5a2'
        }).setOrigin(0.5)
      }
    }
  }
