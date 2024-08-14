terraform {
  backend "s3" {
    bucket         = "cloudmytribeassignment"
    key            = "terraform/state.tfstate" 
    region         ="eu-north-1"
  }
}
provider "aws" {
  access_key = var.access_key
  secret_key = var.secret_key
  region     = var.region
}

data "aws_s3_bucket" "web_bucket" {
  bucket = var.bucket_name
}

locals {
  dist_files = [
    for file in fileset("${path.module}/../dist", "**/*") : {
      key    = file
      source = "${path.module}/../dist/${file}"
    }
  ]
}
resource "aws_s3_object" "object" {
  for_each = { for file in local.dist_files : file.key => file }
  bucket  = data.aws_s3_bucket.web_bucket.bucket
  key     = each.value.key
  source  = each.value.source
  etag    = filemd5(each.value.source)
}
