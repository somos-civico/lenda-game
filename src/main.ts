import Phaser from 'phaser'

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: '#1a2e1a',
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  scene: {
    create() {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2

      this.add.text(cx, cy - 100, '🌿 LENDA', {
        fontSize: '64px',
        color: '#a8d5a2',
        fontStyle: 'bold'
      }).setOrigin(0.5)

      this.add.text(cx, cy - 20, 'Puzzle de Folclore Brasileiro', {
        fontSize: '20px',
        color: '#6b9e65'
      }).setOrigin(0.5)

      this.add.text(cx, cy + 10, 'Brazilian Folklore Puzzle', {
        fontSize: '16px',
        color: '#4a7a44'
      }).setOrigin(0.5)

      const botao = this.add.text(cx, cy + 100, '[ JOGAR ]', {
        fontSize: '28px',
        color: '#ffffff'
      }).setOrigin(0.5).setInteractive()

      botao.on('pointerover', () => botao.setColor('#a8d5a2'))
      botao.on('pointerout', () => botao.setColor('#ffffff'))
      botao.on('pointerdown', () => alert('Começando...'))
    }
  }
}

new Phaser.Game(config)