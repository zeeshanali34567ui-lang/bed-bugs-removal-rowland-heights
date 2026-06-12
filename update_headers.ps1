$ErrorActionPreference = "Stop"
$index = Get-Content index.html -Raw
$pattern = '(?s)[ \t]*<!-- 1\. TOP NAVBAR -->.*?</header>'
$header = [regex]::Match($index, $pattern).Value

if ([string]::IsNullOrEmpty($header)) {
    Write-Error "Could not find header in index.html"
    exit 1
}

Write-Output "Found header of length: $($header.Length)"

Get-ChildItem -Filter *.html -Exclude index.html | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    if ([regex]::IsMatch($content, $pattern)) {
        $newContent = [regex]::Replace($content, $pattern, $header)
        Set-Content -Path $_.FullName -Value $newContent -Encoding UTF8
        Write-Output "Updated header in $($_.Name)"
    } else {
        Write-Output "Skipped $($_.Name) - no header found"
    }
}
