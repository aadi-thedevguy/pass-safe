export const generatePassword = ( length ) => {

    const numbers = [1,2,3,4,5,6,7,8,9,0]
    const symbols = ["@","$","%","&", "*","-"]
    const characterCodes = Array.from(Array(26)).map((_,i) => i + 97)
    const lowercaseletters = characterCodes.map(code => String.fromCharCode(code)) 
    const uppercaseletters = lowercaseletters.map(letter => letter.toUpperCase()) 
  
      const availableCharacters = [
          ...symbols, ...numbers, ...uppercaseletters, ...lowercaseletters
      ]
      
      let password = ""
      if (availableCharacters.length === 0) return ""
  
      for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * availableCharacters.length)
          password += availableCharacters[randomIndex]
      }
      return password
  }