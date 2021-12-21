# 一笔带过

## useSlots

> packages\runtime-core\src\apiSetupHelpers.ts

```typescript
export function useSlots(): SetupContext["slots"] {
  return getContext().slots;
}
```

## useAttrs

> packages\runtime-core\src\apiSetupHelpers.ts

```typescript
export function useAttrs(): SetupContext["attrs"] {
  return getContext().attrs;
}
```
