
PYP=$(cat << _EOS_

import os
import json
from termcolor import colored
from sty import fg, bg, ef, rs



dir_path = "."


def check_( dir, m):
    print(dir)
    with open(dir + '/package.json') as f:
       di = json.load(f)
    print(" ", di['name'])  #
    dep    = di['dependencies']  #
    devDep = di['devDependencies']  #
    for module in m:
        if module in dep:
            print(" ", module, ":", dep[module])
        if module in devDep:
            print(" ", module, ":", devDep[module])

def git_check( dir):
    if os.path.isdir(dir + "/.git"):
        #print(colored("*** git exist: ", "yellow"), dir)
        print(bg.blue + "*** git exist: " + bg.rs,dir)

def package_json_check( dir, m):
    print(dir)
    with open(dir + '/package.json') as f:
       di = json.load(f)

    print(" ", "name:", di['name'])  #
    if 'dependencies' in di:
      dep    = di['dependencies']  #
      for module in m:
          if module in dep:
              print("       ", module, ":", dep[module])

    if 'devDependencies' in di:
      devDep = di['devDependencies']  #
      for module in m:
          if module in devDep:
              print("     D ", module, ":", devDep[module])

files_dir = [
    f for f in os.listdir(dir_path) if os.path.isdir(os.path.join(dir_path, f))
]
#print(files_dir)
modules = [ "astro", "solid-js", "@astrojs/solid-js"]

for dir in files_dir:
    #package_json_check(dir, modules)
    git_check(dir )

_EOS_
)


#echo "$PYP" 
#echo "$PYP" > /var/tmp/pytmp.py
#python3  /var/tmp/pytmp.py
echo "$PYP" | python3



