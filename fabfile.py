from fabric.api import *
dev_host = 'canvas_admin@173.255.252.207:22'
prod_host = 'canvas_admin@173.255.252.207:22'


def dev():
    env.hosts = [dev_host]
    env.branch = 'dev'
    env.password = 'Megaman123-'


def prod():
    env.hosts = [prod_host]
    env.branch = 'production'
    env.password = 'Megaman123-'


def pushpull():
    #local('git commit -am "Commiting to '+env.branch+' for push"')
    local('git push origin ' + env.branch)
    run('cd www;'
        'git pull origin ' + env.branch + ';')

    #run('')