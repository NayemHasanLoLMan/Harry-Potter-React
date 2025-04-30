// "use client"

// import { useEffect, useRef } from "react"

// const BackgroundEffects = () => {
//   const canvasRef = useRef<HTMLCanvasElement>(null)

//   useEffect(() => {
//     const canvas = canvasRef.current
//     if (!canvas) return

//     const ctx = canvas.getContext("2d")
//     if (!ctx) return

//     // Set canvas dimensions
//     const setCanvasDimensions = () => {
//       canvas.width = window.innerWidth
//       canvas.height = window.innerHeight
//     }

//     setCanvasDimensions()
//     window.addEventListener("resize", setCanvasDimensions)

//     // Particle class
//     class Particle {
//       x: number
//       y: number
//       size: number
//       speedX: number
//       speedY: number
//       color: string
//       alpha: number

//       constructor() {
//         this.x = Math.random() * canvas.width
//         this.y = Math.random() * canvas.height
//         this.size = Math.random() * 3 + 0.5
//         this.speedX = Math.random() * 0.5 - 0.25
//         this.speedY = Math.random() * 0.5 - 0.25
//         this.color = this.getRandomColor()
//         this.alpha = Math.random() * 0.5 + 0.1
//       }

//       getRandomColor() {
//         const colors = [
//           "#D3A625", // Gryffindor gold
//           "#740001", // Gryffindor red
//           "#0597d8", // Spell blue
//           "#1a472a", // Slytherin green
//           "#FFD700", // Gold
//         ]
//         return colors[Math.floor(Math.random() * colors.length)]
//       }

//       update() {
//         this.x += this.speedX
//         this.y += this.speedY

//         if (this.x < 0 || this.x > canvas.width) {
//           this.speedX = -this.speedX
//         }
//         if (this.y < 0 || this.y > canvas.height) {
//           this.speedY = -this.speedY
//         }
//       }

//       draw() {
//         if (!ctx) return
//         ctx.beginPath()
//         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
//         ctx.fillStyle = this.color
//         ctx.globalAlpha = this.alpha
//         ctx.fill()
//         ctx.globalAlpha = 1
//       }
//     }

//     // Create particles
//     const particles: Particle[] = []
//     const particleCount = Math.min(100, Math.floor((window.innerWidth * window.innerHeight) / 10000))

//     for (let i = 0; i < particleCount; i++) {
//       particles.push(new Particle())
//     }

//     // Animation loop
//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height)

//       // Draw particles
//       particles.forEach((particle) => {
//         particle.update()
//         particle.draw()
//       })

//       requestAnimationFrame(animate)
//     }

//     animate()

//     return () => {
//       window.removeEventListener("resize", setCanvasDimensions)
//     }
//   }, [])

//   return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" style={{ pointerEvents: "none" }} />
// }

// export default BackgroundEffects



"use client"

import { useEffect, useRef } from "react"

const BackgroundEffects = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      alpha: number
      movement: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 0.5
        this.speedX = Math.random() * 0.5 - 0.25
        this.speedY = Math.random() * 0.5 - 0.25
        this.color = this.getRandomColor()
        this.alpha = Math.random() * 0.5 + 0.1
        this.movement = Math.random() * 2 + 1
      }

      getRandomColor() {
        const colors = [
          "#D3A625", // Gryffindor gold
          "#740001", // Gryffindor red
          "#0597d8", // Spell blue
          "#1a472a", // Slytherin green
          "#FFD700", // Gold
          "#FFB6C1", // Light pink (for magical sparkle)
        ]
        return colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        // Add slight oscillation for more magical effect
        this.x += this.speedX + Math.sin(Date.now() * 0.001 * this.movement) * 0.1
        this.y += this.speedY + Math.cos(Date.now() * 0.002 * this.movement) * 0.1

        if (this.x < 0 || this.x > canvas.width) {
          this.speedX = -this.speedX
        }
        if (this.y < 0 || this.y > canvas.height) {
          this.speedY = -this.speedY
        }
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        
        // Make particles pulse slightly
        const pulseAlpha = this.alpha * (0.7 + 0.3 * Math.sin(Date.now() * 0.003 * this.movement))
        ctx.globalAlpha = pulseAlpha
        
        ctx.fill()
        ctx.globalAlpha = 1
      }
    }

    // Create particles
    const particles: Particle[] = []
    const particleCount = Math.min(120, Math.floor((window.innerWidth * window.innerHeight) / 8000))

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Star class for twinkling effect
    class Star {
      x: number
      y: number
      size: number
      twinkleSpeed: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 1.5 + 0.5
        this.twinkleSpeed = Math.random() * 0.01 + 0.005
      }

      update() {
        // Stars don't move, just twinkle
      }

      draw() {
        if (!ctx) return
        const brightness = 0.3 + Math.abs(Math.sin(Date.now() * this.twinkleSpeed)) * 0.7
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${brightness})`
        ctx.fill()
      }
    }

    // Create stars
    const stars: Star[] = []
    const starCount = 100
    
    for (let i = 0; i < starCount; i++) {
      stars.push(new Star())
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw stars
      stars.forEach((star) => {
        star.update()
        star.draw()
      })

      // Draw particles
      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" style={{ pointerEvents: "none" }} />
}

export default BackgroundEffects
