require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name         = "react-native-megacool"
  s.version      = package["version"]
  s.summary      = package["description"]
  s.description  = <<-DESC
                  React Native Megacool bridge
                   DESC
  s.homepage     = "https://github.com/wowmaking/react-native-megacool"
  s.license      = { :type => "MIT", :file => "LICENSE" }
  s.authors      = { "Dmitriy Kazlouski" => "d.kazlouski@wowmaking.net" }
  s.platforms    = { :ios => "9.0", :tvos => "10.0" }
  s.source       = { :git => "https://github.com/wowmaking/react-native-megacool.git", :tag => "v#{s.version}" }

  s.source_files = "ios/**/*.{h,m,swift}"
  s.requires_arc = true

  s.dependency "React"
  s.dependency "Megacool"
end

