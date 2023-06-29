# Riceproteome
Dockerize Riceproteome

# 1. Change url setting (Defaults address(127.0.0.1))
1. Change ALLOWED_HOSTS in proteome Django's config file. 
3. Change CORS_ORIGIN_WHITELIST setting to connect with proteomReact app.
4. Change api address.
Move to the address('Riceproteome/proteomReact/loginapp/src/') and replace the 'Scaffolds' in the subdirectory 'components/Board' and the API address used in 'App.js' with the address used in ALLOWED_HOSTS.

# 2. Build images
1. Enter the directory(proteomDjango,proteomReact)
2. build the docker image.

```sh runcode.sh```

# 3. Build docker compose
```docker compose up - d```

## 1. Using maxquant output data(proteingroups.txt)
1. Repetition must be confirmed (rep1,rep2,rep3...)
2. LFQ study uses "LFQ intensity" value.
3. Pooling is only considered in TMT studies, and "Pooling" should be included in the label.
4. LFQ study uses "intensity corrected" value

# Visit Riceproteome
http://riceproteome.plantprofile.net/
# Usage
## 1. sigh up & sign in
## 2. make project
## 3. upload experiment
You can download example data(1. proteinGroups_2018Y_Rice leaves (MSP1)_Label-free.txt.) to cover Msp1flg22LFQstudy,Leaf_exp1_LFQ,Msp1andFlg22LFQ found at http://riceproteome.plantprofile.net/Public.

## 4. new analysis

## 5. go DEP

## 6. go GOEA

## 7. go Network
   
