import Phaser from 'phaser'

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#1a2e1a',
  scene: {
    create() {
      this.add.text(400, 250, '🌿 LENDA', {
        fontSize: '64px',
        color: '#a8d5a2',
        fontStyle: 'bold'
      }).setOrigin(0.5)

      this.add.text(400, 340, 'Puzzle de Folclore Brasileiro', {
        fontSize: '20px',
        color: '#6b9e65'
      }).setOrigin(0.5)

      const botao = this.add.text(400, 450, '[ JOGAR ]', {
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