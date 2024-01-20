# Here are some best practices to empower us in crafting good code ✨
### *It's a starter 🍼 pack, the content will be continuously updated*

## [ 0.  General ]

### Prefer shortened arrow functions if there is one line of code

```typescript
// avoid
const onSpell = () => {
    doMagic(id);
};

// prefer
const onSpell = () => doMagic(id);
}
```

### Embrace Singularity in Each Scope

```typescript
// avoid (suffering from boolean blindness)
transferFile(false, true, false, true);
// prefer
transferFile(TransferMode.Read, TransferMode.Write, TransferMode.Read, TransferMode.Write);
```

### Prefer One Slot for One Type in a Single Scope

```typescript
// avoid (too generic)
function transferWealth(from: Wallet, to: Wallet) {}

// prefer
class SenderWallet { } // or type SenderWallet = { __type: 'SenderWallet' }
class RecipientWallet { } // or type RecipientWallet = { __type: 'RecipientWallet' }
function transferWealth(from: SenderWallet, to: RecipientWallet) {}
```

### Don't Haul the Whole Fleet When a Part Will Do

```typescript
// avoid
function getFullName(user: User) {
return `${user.firstName} ${user.lastName}`;
}

// prefer
function getFullName(firstName: FirstName, lastName: LastName) {
return `${firstName} ${lastName}`;
}
```

## [ 1.  React ]

### Immutability

When updating state or props, always create a new object or array to avoid unexpected side effects and ensure that React can efficiently detect changes and trigger re-renders. 
The spread operator (...) is often used for this purpose.

```typescript
// correct way to update state
setState(prevState => ({
  ...prevState,
  key: 'new value',
}));
```

### Key Prop in Lists
When rendering lists of elements in React, each item should have a unique key prop. This enables React to identify and update elements efficiently when items are added, removed, or reordered. Using a key prop is crucial for optimizing performance and preventing issues with list rendering.

```typescript jsx
<ul>
  {items.map(item => (
    <li key={item.id}>{item.name}</li>
  ))}
</ul>
```

### Lazy Loading and Code Splitting
Optimize your application's performance by implementing code splitting and lazy loading. These techniques ensure that only the necessary code is loaded when a specific component or route is accessed, reducing the initial load time and improving user experience. React's `React.lazy()` function allows you to dynamically load components.

```typescript 
const LazyComponent = React.lazy(() => import('./LazyComponent'));
```

### Error Boundaries
React 16 introduced error boundaries, which are special components that catch JavaScript errors in their child component tree, log those errors, and display a fallback UI. Utilizing error boundaries helps prevent your entire application from crashing when an error occurs in a specific component. Implement an error boundary component to gracefully handle errors.

```typescript 
class ErrorBoundary extends React.Component {
    componentDidCatch(error, errorInfo) {
        // Handle the error here (e.g., log it or show a user-friendly message)
    }

    render() {
        return this.props.children;
    }
}
```

## [ 2.  TypeScript ]

### Leverage Type Inference

TypeScript has powerful type inference capabilities, allowing you to omit explicit type annotations in certain scenarios. 
```typescript
// avoid
const message: string = "Hello, World!";

// prefer
const message = "Hello, World!";
```

### Use Explicit Type Annotations 

```typescript
// avoid
function calculateSum(a, b) {
  return a + b;
}

// prefer
function calculateSum(a: number, b: number): number {
  return a + b;
}
```

### Utilize Interfaces for Object Shapes
```typescript
// avoid
const user: { name: string; age: number } = { name: "John", age: 30 };

// prefer
interface User {
name: string;
age: number;
}

const user: User = { name: "John", age: 30 };
```