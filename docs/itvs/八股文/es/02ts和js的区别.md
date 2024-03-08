# TypeScript和JavaScript的主要区别

### 1. 静态类型检查
- **TypeScript**：是静态类型的语言/强类型语言，在编译时进行类型检查，有错误在编译时就被发现
- **JavaScript**：是动态类型语言/弱类型，没有编译时的类型检查。所有的错误（包括类型错误）都在运行时发现

### 2.类型注解和接口
- **TypeScript**：提供了类型注解和接口，允许开发自定义类型，代码更加清晰
- **JavaScript**：不支持类型注解和接口

### 3.编译
- **TypeScript**：必须编译成 JavaScript 才能在浏览器中运行。这通常通过 TypeScript 编译器或通过 Babel 等构建工具完成
- **JavaScript**：可以直接在浏览器或Node中运行，不需要编译
  
### 4.工具支持
- **TypeScript**：强类型语言，编辑器支持比如自动完成、重构工具、更详细的错误提示
- **JavaScript**：开发环境提供了对JavaScript的支持，但是依旧不如TypeScript强大和精确

### 5.生态系统和工具链
- **TypeScript**：虽然 TypeScript 的生态系统在不断成长，但在一些情况下，它可能需要额外的类型定义文件（例如 DefinitelyTyped 提供的 .d.ts 文件）来与现有的 JavaScript 库一起使用。
-  **JavaScript**：有一个庞大的生态系统和许多现成的工具
