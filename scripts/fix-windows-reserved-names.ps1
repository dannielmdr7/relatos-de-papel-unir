# Script PowerShell para eliminar archivos con nombres reservados de Windows del repositorio
# Útil para ejecutar manualmente si el hook no funciona

$reservedNames = @(
    "nul", "CON", "PRN", "AUX",
    "COM1", "COM2", "COM3", "COM4", "COM5", "COM6", "COM7", "COM8", "COM9",
    "LPT1", "LPT2", "LPT3", "LPT4", "LPT5", "LPT6", "LPT7", "LPT8", "LPT9"
)

$extensions = @("", ".txt", ".log", ".tmp", ".bak")

Write-Host "🔍 Buscando archivos con nombres reservados de Windows..." -ForegroundColor Cyan

$removed = 0

foreach ($name in $reservedNames) {
    foreach ($ext in $extensions) {
        $filename = "$name$ext"
        
        # Verificar si el archivo existe en el índice de Git
        $result = git ls-files --error-unmatch "$filename" 2>&1
        if ($LASTEXITCODE -eq 0) {
            Write-Host "❌ Encontrado: $filename" -ForegroundColor Red
            git rm --cached "$filename" 2>$null
            if ($LASTEXITCODE -eq 0) {
                $removed++
            }
        }
    }
}

if ($removed -eq 0) {
    Write-Host "✅ No se encontraron archivos con nombres reservados." -ForegroundColor Green
} else {
    Write-Host "✅ Se eliminaron $removed archivo(s) del índice de Git." -ForegroundColor Green
    Write-Host "💡 Ejecuta 'git commit' para confirmar los cambios." -ForegroundColor Yellow
}

