import re
import json

def get_file_content(path):
    with open(path, 'r') as f:
        return f.read()

def save_file_content(path, content):
    with open(path, 'w') as f:
        f.write(content)

def update_question_svg(file_content, q_id, new_svg):
    idx = file_content.find(f'id: "{q_id}"')
    if idx == -1:
        print(f"Question {q_id} not found!")
        return file_content
    
    svg_start = file_content.find('svg: `', idx)
    if svg_start == -1 or svg_start > idx + 500:
        print(f"svg field not found for {q_id}")
        options_idx = file_content.find('options: [', idx)
        if options_idx != -1:
            return file_content[:options_idx] + 'svg: `' + new_svg + '`,\n    ' + file_content[options_idx:]
        return file_content
    
    svg_end = file_content.find('`,', svg_start)
    if svg_end == -1:
        print(f"End of svg not found for {q_id}")
        return file_content
    
    new_content = file_content[:svg_start] + 'svg: `' + new_svg + file_content[svg_end:]
    return new_content

def run():
    p3 = "src/data/questions_est1_2021_april_part3.ts"
    c3 = get_file_content(p3)
    
    # We already updated 48 and 54. Let's update the missing ones:
    # However, since they might refer to the first question in the block, 
    # it's usually enough if only the first question in the block has the svg.
    # The applet's QuizRunner often looks for `svg` on the current question, 
    # so we should probably add it to all questions in the block.
    # We will just add the same table/svg to 49, 50, and 55 if they don't have it.
    pass

if __name__ == "__main__":
    run()
