# sunshinecam
This is a time lapse camera project for workshop &amp; arduino day 2015.

Edison延时相机制作手册

一、	更新固件
https://communities.intel.com/docs/DOC-23192
参考附件：01-Flashing Edison (wired) - Windows _ Intel Communities\
二、	设置edison
执行：configure_edison命令，按照提示设置用户名、密码、wifi信息。
configure_edison –wifi 修改wifi信息
configure_edison –password 设置密码
configure_edison ---help 查看帮助

三、	配置Edison软件源
http://alextgalileo.altervista.org/edison-package-repo-configuration-instructions.html

Edison configuration instructions:

To configure your Edison to fetch packages from this repo, replace anything you have in /etc/opkg/base-feeds.conf with the following (other opkg config files don't need any changes):

===/etc/opkg/base-feeds.conf contents below===
src/gz all http://repo.opkg.net/edison/repo/all
src/gz edison http://repo.opkg.net/edison/repo/edison
src/gz core2-32 http://repo.opkg.net/edison/repo/core2-32

===end of /etc/opkg/base-feeds.conf contents===

3) Run opkg update command and you should see the below output, which means you're successfully communicating with the repo. Do not run "opkg upgrade", that will overfill your rootfs and is not an intended use case for this repo. Upgrade specific packages with just "opkg install <packagename>" if you want to upgrade something.

===example console output===

root@edison:~# opkg update
Downloading http://repo.opkg.net/edison/repo/all/Packages.gz.
Inflating http://repo.opkg.net/edison/repo/all/Packages.gz.
Updated list of available packages in /var/lib/opkg/all.
Downloading http://repo.opkg.net/edison/repo/edison/Packages.gz.
Inflating http://repo.opkg.net/edison/repo/edison/Packages.gz.
Updated list of available packages in /var/lib/opkg/edison.
Downloading http://repo.opkg.net/edison/repo/core2-32/Packages.gz.
Inflating http://repo.opkg.net/edison/repo/core2-32/Packages.gz.
Updated list of available packages in /var/lib/opkg/core2-32.

===end of example console output===
四、	安装fswebcam
opkg  install  fswebcam
五、	下载运行
安装tf卡，然后：
opkg  install git
git clone https://github.com/bloomlj/sunshinecam.git
cd sunshinecam
npm install
node sunshine.js

ok now!

