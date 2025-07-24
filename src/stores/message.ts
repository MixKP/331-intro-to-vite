import type { MessageState } from '@/types'
import { defineStore } from 'pinia'

export const useMessageStore = defineStore('message', {
  state: (): MessageState => ({
    message: ''
  }),
  actions: {
    updateMessage(newMessage: string): void {
      this.message = newMessage
    },
    restoreMessage(): void {
      this.message = ''
    }
  }
})
