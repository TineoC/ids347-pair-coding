# Software Requirements

## Clase

- [ ] Debe manejar un string de entrada que describa el rango y sus intervalos
- [ ] Los intervalos del rango pueden ser:
  - [ ] Abiertos. Ej: 
    - (3,4)
    - (1,2)
  - [ ] Cerrados. Ej:
    - [3,4]
    - [1,2]
    - [2,3]
- [ ] El intervalo de inicio nunca puede ser mayor al de fin.
- [ ] Recibe un string de entrada
  - [ ] Tiene que eliminar espacios en blanco
- [ ] El separador solo puede ser de coma
- [ ] Los extremos válidos son solo
  - Abiertos
    - Paréntesis ()
  - Cerrados
    - Corchetes []

## Funciones

- [ ] Contains
  - Entradas
    - [ ] Instancia de la clase Rango
    - [ ] Un Conjunto de elementos
      -  Eliminar repeticiones
  - Salida
    - Booleano
  - Condicion
    - Todos los elementos del conjunto deben contener al rango.

- [ ] Endpoints
  - Entrada
    - [ ] Instancia de la clase Rango
  - Salida
    - Number list of the two closed endpoints

- [ ] Allpoints
  - Entrada
    - [ ] Instancia de la clase Rango
  - Salida
    - Number list

- [ ] Equals
  - Entrada
    - [ ] Instancia de la clase Rango
  - Salida
    - Boolean
  - Condiciones
    - Toma en consideración los endpoints no la entrada del constructor
    - La igualdad es simétrica

- [ ] OverlapsRange
  - Entradas
    - [ ] Instancia de la clase Rango
  - Salida
    - Booleano
  - Meaning 
    - The first range intersect with the second one

- [ ] Equals 
  - Entradas
    - [ ] Instancia de la clase Rango
  - Salida
    - Booleano
  - Meaning 
    - The first range have the same endpoints