import re
import os

for filename in os.listdir('src/data/'):
    if filename.endswith('.ts'):
        filepath = os.path.join('src/data/', filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            text = f.read()
        
        # Replace html: `<table with svg: `<table
        if 'html: `<table' in text:
            text = text.replace('html: `<table', 'svg: `<table')
            
            # Simple replace of < and <= inside <th> or <td> elements, but easier is to just replace the whole text if it's specific
            # For now, let's just do a blanket replace of <= with &le; inside the svg: `<table...>` block
            def fix_table_html(match):
                table_str = match.group(0)
                # Just replace <= with &le; and < with &lt; inside the table string
                # Note: we shouldn't replace < if it's part of an HTML tag like <th> or <td>
                # A safe way is to replace ' <= ' with ' &le; ', ' < ' with ' &lt; '
                table_str = table_str.replace(' <= ', ' &le; ')
                table_str = table_str.replace(' < ', ' &lt; ')
                return table_str
                
            text = re.sub(r'svg: `<table.*?</table>`', fix_table_html, text, flags=re.DOTALL)
            
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(text)
            print(f"Fixed {filename}")

