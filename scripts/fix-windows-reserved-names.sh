#!/bin/bash
# Script para eliminar archivos con nombres reservados de Windows del repositorio
# Útil para ejecutar manualmente si el hook no funciona

RESERVED_NAMES="nul CON PRN AUX COM1 COM2 COM3 COM4 COM5 COM6 COM7 COM8 COM9 LPT1 LPT2 LPT3 LPT4 LPT5 LPT6 LPT7 LPT8 LPT9"

echo "🔍 Buscando archivos con nombres reservados de Windows..."

REMOVED=0
for name in $RESERVED_NAMES; do
  if git ls-files --error-unmatch "$name" >/dev/null 2>&1; then
    echo "❌ Encontrado: $name"
    git rm --cached "$name" 2>/dev/null && REMOVED=$((REMOVED + 1))
  fi
  
  for ext in "" ".txt" ".log" ".tmp" ".bak"; do
    filename="${name}${ext}"
    if git ls-files --error-unmatch "$filename" >/dev/null 2>&1; then
      echo "❌ Encontrado: $filename"
      git rm --cached "$filename" 2>/dev/null && REMOVED=$((REMOVED + 1))
    fi
  done
done

if [ $REMOVED -eq 0 ]; then
  echo "✅ No se encontraron archivos con nombres reservados."
else
  echo "✅ Se eliminaron $REMOVED archivo(s) del índice de Git."
  echo "💡 Ejecuta 'git commit' para confirmar los cambios."
fi

