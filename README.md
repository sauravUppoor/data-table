# Data Table Component
A simple custom react data table component with sort, search, filter features.

### `TableContainer` component

```
<TableContainer
    rows={rows}
    columns={columns}
/>
```

### Props
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `rows` | Array\<object\> | | Set of rows of TableContainer |
| `columns` | Array\<string\> | | Set of columns of TableContainer |
| `disableSearch` | bool | `false` | Disable the Search Bar |
| `disableFilter` | bool | `false` | Disable the Filter |
